# List of HTTP status Codes

#### This is a list of Hypertext Transfer Protocol (HTTP) response status codes.
- Status codes are issued by a server in response to a client's request made to the server. It includes codes from Request for Comments (RFCs), other specifications, and some additional codes used in some common applications of the HTTP

### 1xx informational response
- 100 - continue --> The server has received the request headers and the client should proceed to send the request body.
### 2xx success
- 200  - "OK - succesful"
- 202 - The request has been accepted for processing, but the processing has not been completed.

### 3xx redirection
- 301 - Moved Permanently --> This and all future requests should be directed to the given URI

### 4xx client errors
- 403 - forbidden --> The request contained valid data and was understood by the server, but the server is refusing action. This may be due to the user not having the necessary permissions for a resource or needing an account of some sort, or attempting a prohibited action (e.g. creating a duplicate record where only one is allowed)
- 404 - not found --> The requested resource could not be found but may be available in the future. Subsequent requests by the client are permissible.

### 5xx server errors
- 500 - internal server error --> A generic error message, given when an unexpected condition was encountered and no more specific message is suitable.
- 501 - Not implemented --> The server either does not recognize the request method, or it lacks the ability to fulfil the request. Usually this implies future availability 
- 502 - The server was acting as a gateway or proxy and received an invalid response from the upstream server.