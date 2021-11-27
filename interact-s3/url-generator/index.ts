import * as AWS from 'aws-sdk';
import config = require('config');

const s3 = new AWS.S3();

const getPresignedUrl = async (key: string) => {
    const params = {
        Bucket: config.get('aws.s3.bucketName'), 
        Key: key,
        Expires: 60,
    }
    return await s3.getSignedUrlPromise('getObject', params);
}

getPresignedUrl('test').then(console.log);