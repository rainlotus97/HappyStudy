/*
 * @Author: rainlotus97
 * @Date: 2022-03-11 22:50:14
 * @LastEditors: rainlotus97
 * @LastEditTime: 2022-06-16 19:18:06
 * @FilePath: /happy-study/src/utils/github-api.ts
 * @Description: github接口api
 */
export const PUBLICTOKEN = "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"

/**
 * @method: USERREPOSURL 仓库查询api
 * @description: get方法 
 * @param  headers: {
                "authorization": 'token '+PUBLICTOKEN,
                "Accept":"application/vnd.github.v3+json"
            }
 */
const USERREPOSURL = 'https://api.github.com/user/repos'

/**
 * @method: 新建仓库
 * @description: post
 * @param headers: {
                "authorization": 'token '+PUBLICTOKEN,
                "Accept":"application/vnd.github.v3+json"
            }
            params:{
                "name":"test" test为文件名称
            }
 */
const NEWREPOURL = 'https://api.github.com/user/repos'

/**
 * @method: 获取用户信息
 * @description: get
 * @param 'rainlotus97' 为拼接用户名
 */
const USERMESSAGE='https://api.github.com/users/'+'rainlotus97'