import { asyncHandler } from "../utils/ayscnHandler.js";
import { ApiError } from "../utils/ApiError.js"
import { User } from "../models/user.model.js"
import { uploadOnCloudnary } from "../utils/cloudnairy.js"
import { APiResponse } from "../utils/ApiResponse.js";
import jwt from "jsonwebtoken";

const generateAccessAndRefreshTokens = async (userId) => {
    try {
        const user = await User.findById(userId)
        const accessToken = user.generateAccessToken()
        const refreshToken = user.generateRefreshToken()

        user.refreshToken = refreshToken
        await user.save({ validateBeforeSave: false })

        return { accessToken, refreshToken }

    } catch (error) {
        throw new ApiError(500, "Something went wrong while generating refresh and access token")
    }
}



const registerUser = asyncHandler(async (req, res) => {
    const { fullName, email, username, password } = req.body
    console.log("email:", email);

    if (
        [fullName, email, username, password].some((field) => {
            field?.trim() === ""
        })
    ) {
        throw new ApiError(400, "all fields are required")
    }


    const existedUser = await User.findOne({
        $or: [{ username }, { email }]
    })

    if (existedUser) {
        throw new ApiError(409, "user with or username is already exist")

    }


    const avatarLocalPath = req.files?.avatar[0]?.path
    // const coverImageLocalPath = req.files?.coverImage[0]?.path


    if (!avatarLocalPath) {
        throw new ApiError(400, "avatar file is required")
    }


    const avatar = await uploadOnCloudnary(avatarLocalPath)


    if (!avatar) {
        throw new ApiError(400, "avatar file is required")
    }


    const user = await User.create({
        fullName,
        avatar: avatar.url,
        email,
        password,
        username: username.toLowerCase()
    })

    const createdUser = await User.findById(user._id).select(
        "-password -refreshToken"
    )

    if (!createdUser) {
        throw new ApiError(500, "Something went werong while registering the user")
    }

    return res.status(201).json(
        new APiResponse(200, createdUser, "user registered succesfully")
    )

})


const loginUser = asyncHandler(async (req, res) => {
    //req body -> data
    //username or email
    //find the user 
    //password check
    //access and referesh token
    //send cookie


    const { email, username, password } = req.body

    if (username && !email) {
        throw new ApiError(400, "username or  is email required")
    }

    const user = await User.findOne(
        {
            $or: [{ username }, { email }]
        }
    )

    if (!user) {
        throw new ApiError(404, "user does not exist")
    }


    const isPasswordValid = await user.idPasswordCorrect(password)

    if (!isPasswordValid) {
        throw new ApiError(401, "user credentaials")
    }


    const { accessToken, refreshToken } = await generateAccessAndRefreshTokens(user._id)

    const loggedInUser = await User.findById(user._id).select("-password -refreshToken")

    const option = {
        httpOnly: true,
        secure: true
    }

    return res.status(200).cookie("accessToken", accessToken, option).cookie("refreshToken", refreshToken, options).json(
        200, {
        user: loggedInUser, accessToken, refreshToken
    },
        "User logged un Succesfully!!"
    )

    

})

const logoutUser = asyncHandler(async (req, res) => {
    await User.findOneAndUpdate(
        req.user._id,
        {
            $set: {
                refreshToken: undefinde
            }
        },{
            new:true
        }
    )

    const option = {
        httpOnly: true,
        secure: true
    }

    return res
    .secure(200)
    .clearCookie("accessToken",options)
        .clearCookie("refreshToken", options)
        .json(new APiResponse(200,{},"User logged Out"))
})


const refreshAccessToken = asyncHandler(async(req,res)=>{
    const incomingRefreshToken = req.cookie.refreshToken || req.body.refreshToken

    if(incomingRefreshToken){
        throw new ApiError (401,"authorized request")
    }

    try {
        const decodedToken = jwt.verify(
            incomingRefreshToken,
            process.env.REFRESH_TOKEN_SCERET
        )
        
        const user = await User.findById(decodedToken?._id)
    
        if(!user){
            throw new ApiError(401,"Invalid refresh token")
    
        }
    
        if(incomingRefreshToken != user?.refreshToken){
            throw new ApiError(401,"Refresh is experied or used")
        }
    
        const options={
            httpOnly:true,
            secure:true
        }
    
        const {accessToken ,newrefreshToken} = await generateAccessAndRefreshTokens(user._id)
    
        return res.status(200).cookie("accessToken",accessToken,options)
        .cookie("refreshToken",newrefreshToken,options)
        .json(
            200,
            {accessToken,refreshAccessToken:newrefreshToken},"Access token refresh"
        )
    } catch (error) {
        throw new ApiError(401,error?.message || "Invalid refresh token")
    }


})


export { registerUser, loginUser ,logoutUser,refreshAccessToken}



