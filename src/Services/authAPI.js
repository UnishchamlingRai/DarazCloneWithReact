export async function logIn({username, password}) {
    try {
        const res= await fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              
              username: username,
              password: password,
              expiresInMins: 30, // optional, defaults to 60
            })
          })
          const data=await res.json()
          return data
    } catch (error) {
        console.log("ERROR IN Login:", error);
        return error.message
    }

      
}

// username: 'emilys',
// password: 'emilyspass',