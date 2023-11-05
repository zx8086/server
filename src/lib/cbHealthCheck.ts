import {
    Bucket,
    Cluster,
    Collection,
    connect,
    ConnectOptions,
    GetResult,
    QueryResult,
  } from 'couchbase'
  
  export async function cbPing() {
  
    const clusterConnStr: string = 'couchbases://cb.3qpvkzizaf9npz7s.cloud.couchbase.com'
    const username: string = 'S_APP_SIMON'
    const password: string = 'Krgp!W!hNyJ8d4QQ'
    const bucketName: string = 'default'
  
    const connectOptions: ConnectOptions = {
      username: username,
      password: password,
      // Sets a pre-configured profile called "wanDevelopment" to help avoid latency issues
      // when accessing Capella from a different Wide Area Network
      // or Availability Zone (e.g. your laptop).
      configProfile: 'wanDevelopment'
    }
  
    const cluster: Cluster = await connect(clusterConnStr, connectOptions)
    
      // Ping the cluster
      var results = await cluster.ping()
      console.log(results)
    
      return results;
  }