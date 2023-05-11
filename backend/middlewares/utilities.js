export const handleError= (res, statusCode=500, message="Internal Server Error")=>{
    return res.status(statusCode).json({
        success: false,
        error: message
    })
}

export const handleSuccess =  (res, statusCode=200, message="")=>{
    return res.status(statusCode).json({
        success: true,
        message: message
    })
}