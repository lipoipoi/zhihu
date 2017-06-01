
 export function getFetch(url,params){  
        if(typeof params === 'object' && params){  
            var str = '?';  
            Object.keys(params).forEach(function(val){  
                str += val + '=' + encodeURIComponent(params[val]) + '&';  
            })  
        }  
       return fetch(url + str, { method : 'GET'})
 } 
 export function postFetch(url, params){  
        var formData = new FormData();  
        for(let k in params){  
            formData.append(k, params[k]);  
        } 
      return  fetch(this.url, {method : 'POST',  mode : 'cors', body : formData })   
}  
export const setTimer=(time)=>{
                const now =new Date().getTime();
                const lastTime =new Date(time).getTime();
                if(now-lastTime>60*1000*60*24*365){
                    return Math.floor((now-lastTime)/(60*1000*60*24*365))+' 年前'
                }else if(now-lastTime>60*1000*60*24*30){
                    return Math.floor((now-lastTime)/(60*1000*60*24*30))+' 个月前'
                }else if(now-lastTime>60*1000*60*24){
                    return Math.floor((now-lastTime)/(60*1000*60*24))+' 天前'
                }else if(now-lastTime>60*1000*60){
                    return Math.floor((now-lastTime)/(60*1000*60))+' 小时前'
                }else  if(now-lastTime>60*1000){
                    return Math.ceil((now-lastTime)/(60*1000))+' 分钟前'
                }else{
                    return ' 刚刚'
                }
            }
 export const getAllName=(tab)=>{
                switch(tab){
                    case 'good':
                    return '精华'
                    break;
                    case 'ask':
                    return '问答'
                    break;
                    case 'share':
                    return '分享'
                    break;
                    case 'job':
                    return '招聘'
                    break;
                    default :
                    return ''
                    break;
                }
             }