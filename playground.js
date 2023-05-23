const getCookie = () => {
    const value = ('; '+document.cookie).split(`; _cioanonid=`).pop().split(';')[0];
    return value
}

const anonPara = document.getElementById("anon-para")
const anonymousId = getCookie()
anonPara.append(anonymousId)
