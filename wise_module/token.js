/**
 * 
 *   发币
 *   @author tianling
 *   @param token  发的币的名称
 *   @param amount 发的币的数量
 *   @param other  收到代币的账号
 */

const eos = require('./eos.js')
const config = require('./config')


async function createToken(token,amount) {
   eos.transaction(
       { 
        actions: [ 
            //创建代币             
            {                
                account: 'eosio.token',  //合约名               
                name: 'create',          //方法                
                authorization: [{                    
                    actor: 'eosio.token',                    
                    permission: 'active'                
                }],                
                data: {                    
                    issuer: config.user, //代币发行方                 
                    maximum_supply: amount, //代币数量                    
                    can_freeze: 0,                    
                    can_recall: 0,                    
                    can_whitelist: 0                
                }            
            }
        ]}       

    )
}

async function transferToken(account,amount) {
    eos.transaction(
        {
            actions: [ 
                //发行代币          
            {                
                account: 'eosio.token',  //合约                
                name: 'issue',           //调用发行代币的方法              
                authorization: [{                    
                    actor: config.user,                    
                    permission: 'active'                
                }],                
                data: {                    
                    to: account,        //收到代币的账号                
                    quantity: transferAmount,                    
                    memo: 'transfer token'                
                }
            }]
        }
    )
}

module.exports = {
    'createToken':createToken,
    'postToken':postToken
}