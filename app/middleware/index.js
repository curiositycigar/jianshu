module.exports = {
    resultHandler: function () {
        return async (ctx, next) => {
            ctx.state.parseBody = function (result, message = '未知错误') {
                if (result) {
                    if (result && result.name && result.errors && result.errors) {
                        //  错误信息
                        message = result.errors.map(item => item.message).join(' & ')
                        return {
                            error: {
                                message: message,
                                code: -1
                            }
                        }
                    } else {
                        return {
                            data: result
                        }
                    }
                } else {
                    return {
                        error: {
                            message: message,
                            code: -1
                        }
                    }
                }
            }
            await next()
        }
    }
}