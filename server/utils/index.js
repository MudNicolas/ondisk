const { createHmac, randomBytes, createCipheriv, createDecipheriv } = await import("node:crypto")

function genRandomString(length) {
    return randomBytes(Math.ceil(length / 2))
        .toString("hex") /** convert to hexadecimal format */
        .slice(0, length) /** return required number of characters */
}

export function sha512(password, salt) {
    return createHmac("sha512", salt).update(password).digest("hex") /**使用sha512算法进行hash*/
}

export function genShaStringAndSalt(password) {
    let salt = genRandomString(16)
    return {
        value: sha512(password, salt),
        salt,
    }
}

export function AESEncode(e, iv) {
    //加密uid+logintime防止token盗用
    var content = JSON.stringify(e)
    var cipher = createCipheriv("aes128", iv, iv) //使用aes192加密
    var enc = cipher.update(content, "utf8", "hex") //编码方式从utf-8转为hex;
    enc += cipher.final("hex") //编码方式转为hex;
    return enc
}

export function AESDecode(e, iv) {
    try {
        var decipher = createDecipheriv(algorithm, iv, iv)
        var dec = decipher.update(e, "hex", "utf8")
        dec += decipher.final("utf8")
        return JSON.parse(dec)
    } catch (error) {
        return false
    }
}
