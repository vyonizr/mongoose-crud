# mongoose-crud

## List of routes

### Books

| Route | HTTP | Params | Body | Description |
| ----- | ---- | --------- | ---- | ----------- |
| `api/books` | GET | `none` | `none` | Get all books info |
| `api/books` | POST | `none` | `isbn:String`,`title:String`,`author:String`,`category:String`,`stock:Integer` | Create a book |
| `api/books` | DELETE | `none` | `isbn` | Delete a book by its ISBN |
| `api/books` | PUT | `none` | `isbn:String`, `field:String`, `value:String` | Update a book with new info by its ISBN |
| `api/books` | PATCH | `none` | `isbn:String`, `field:String`, `value:String` | Update a book with new info by its ISBN |

### Members

| Route | HTTP | Params | Body | Description |
| ----- | ---- | --------- | ---- | ----------- |
| `api/members` | GET | `none` | `none` | Get all users info |
| `api/members` | POST | `none` | `name:String`,`address:String`,`zipcode:String`,`email:String`,`phone:String` | Create a member |
| `api/members` | DELETE | `none` | `_id` | Delete a member by its _id |
| `api/members` | PUT | `none` | `_id:String`, `field:String`, `value:String` | Update a member with new info by its _id |
| `api/members` | PATCH | `none` | `_id:String`, `field:String`, `value:String` | Update a member with new info by its _id |

### Transactions

| Route | HTTP | Params | Body | Description |
| ----- | ---- | --------- | ---- | ----------- |
| `api/transactions` | GET | `none` | `none` | Get all users info |
| `api/transactions` | POST | `none` | `member:ObjectId`,`in_date:Date`,`out_date:Date`,`due_date:Date`,`booklist:ObjectId` | Create a new transaction. If there are more than a book, seperate `ObjectId` on `booklist` by comma "," |
| `api/transactions` | DELETE | `none` | `_id` | Delete a transaction by its _id |
| `api/transactions` | PUT | `none` | `_id:String`, `field:String`, `value:String` | Update a transaction with new info by its _id |
| `api/transactions` | PATCH | `none` | `_id:String`, `field:String`, `value:String` | Update a transaction with new info by its _id |

### List of Filter Routes

| Route | HTTP | Params | Body | Description |
| ----- | ---- | --------- | ---- | ----------- |
| `api/books?author=<author>` | GET | `none` | `none` | Get all books info by the author |
| `api/books?title=<title>` | GET | `none` | `none` | Get all books info by the title |
| `api/books?author=<author>&title=<title>` OR `api/books?title=<title>&author=<author>` | GET | `none` | `none` | Get all books info by the author and the title |
| `api/transactions?isbn=<isbn>` | GET | `none` | `none` | Get all transactions info by the book's ISBN |

## Usage

Make sure you have Node.js and npm installed on your computer, then run these commands:

``` shell
npm install
npm run dev
```

Access the API on `http://localhost:4000/`