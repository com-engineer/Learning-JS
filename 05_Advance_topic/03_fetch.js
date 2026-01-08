//how fetch works-->retuns promise
//initially we used xmlhttprequest 
//it was only available on browser

//Q. if you did the request using promise and it gives the error 404 then where it will be found
// int resolve or reject?
//it willl alwasy found in the form of response not the error
//we get error only when the browser was unable to make the req but here it gives the error msg 404
//it means it has made the request successfully but got msg or response as error code

//how to send the other parameter to fetch like with id,password etc

// a separate quee "micro task que" is created which is fast and there this que is also know as priority 
//queue
 
