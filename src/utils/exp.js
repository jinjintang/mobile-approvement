var exp ={}


   exp.set=function(trade){
    console.log("trade",trade)
    var expire = 86400000
    var data = localStorage.getItem('cacheOrder');
    var curTime = new Date().getTime();
    var newItem = {trade:trade,time:curTime}
    var strItem = JSON.stringify(newItem)
    var list =[]
      var flag = true
       if (data) {

           list = JSON.parse(data)
          
        } 
      var items = list.filter(item=>item.trade.COURSEID == trade.COURSEID)
          if (items.length==1) {

                if (curTime-items[0].time>expire) {
                    items[0].time = curTime
                    flag = true
                  }
                else{
                    flag = false
                  }
               
          } 
          else{
            list.push(newItem)
          } 
      
        localStorage.setItem("cacheOrder",JSON.stringify(list));
        return flag

   }  

 exp.get=function(id){
   var expire = 100000
   var data = localStorage.getItem('cacheOrder'); 
   var curTime = new Date().getTime();
   var flag = false
   if (data) {

          var list = JSON.parse(data)

              list.forEach(item=>{

                if (item.id==id) {
                  if (curTime-item.time>expire) {
                    flag = true
                  }

                }
              })
          
        }     

       return flag 

 }
 exp.auto=function(){

   var expire = 86400000
   var data = localStorage.getItem('cacheOrder'); 
   var curTime = new Date().getTime();
   var all = []
   if (data) {

          var list = JSON.parse(data)

              list.forEach(item=>{

            var temp={trade:item.trade,flag:true}

                if (curTime-item.time>expire) {
                  
                   temp.flag = true
                  }
                else{

                  temp.flag = false
                } 
              all.push(temp)
              })
          
        }     

       return all


 }  


 export default exp
 