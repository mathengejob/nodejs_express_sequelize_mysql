#**Node.js Rest CRUD API overview**
>This a complete Rest Apis that can create, retrieve, update, delete and find Payloads by title.

>First, we start with an Express web server. 
>Next, we add configuration for MySQL database, create Payload model with Sequelize, write the controller. 
>Then we define routes for handling all CRUD operations (including custom finder).

>The following table shows overview of the Rest APIs that will be exported:

|Methods	|Urls	|Actions
|___________|_______|
|GET	|api/payloads	|get all Payloads
|GET	|api/payloads/:id	|get Payload by id
|POST	|api/payloads	|add new Payload
|PUT	|api/payloads/:id	|update Payload by id
|DELETE	|api/payloads/:id	|remove Payload by id
|DELETE	|api/payloads	|remove all Payloads
|GET	|api/payloads/published	|find all published Payloads
|GET	|api/payloads?title=[kw]	|find all Payloads which title contains 'kw'

Finally, we’re gonna test the Rest Apis using Postman.

_Change db name to your preffered DB._