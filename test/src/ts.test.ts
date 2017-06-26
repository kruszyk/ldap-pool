import {Pool, ILDAPPool, IClient, IConnOpts} from 'ldap-pool';

let pool: ILDAPPool = new ILDAPPool({
  size: 5,
  connOpts: {
    url: 'dog',
    reconnect: true
  },
  dn: 'foo',
  pwd: 'dog'
});


const c = pool.getClientSync();

console.log(c);
