const AWS = require('aws-sdk')
const KEY_ID = ""
const SECRET_KEY = ""

const BUCKET_NAME = "DomsS3"

const s3 = new AWS.S3({
    accessKeyId: KEY_ID,
    secretAccessKey: SECRET_KEY
})

const params = {
    Bcket: BUCKET_NAME
}

s3.createBucket(params,(err,data)=>{
    if(err){
        console.log(err)
    }else{
        console.log("Bucket Created successfully", data.location)
    }
})