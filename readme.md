routing
/ - login or register
/login
/register
/home - display articles, filter searches from search bar
/new-article - to create article
/home/articleId  - view each article
/user-profile/modify-article - to modify
/user-profile/delete-article/:id - to soft delete
/user-profile - to show profile and soft delete



data base design

users

username
first name
password
email
user-age
user-genre ['romatic','chilipi']
article-id ['']


 
articles

articleId   uudiv4
article_name  user istadu name
article_description
content  
username
genre
keywords
rating(cummulative)
age-group
visibility (softDelete)
comments [
    {
        username
        text
    }
]




doubts

user profile
soft delete routing

article example

{
  "_id": {
    "$oid": "65fdd998adc4fc3372c27618"
  },
  "articleId": "df176d06-ec5d-4cd9-96e7-1717e388949d",
  "title": "pppp",
  "description": "ppp",
  "genre": "Romance",
  "tags": "fjadklfjaklfj",
  "ageGroup": "18+",
  "content": "dfjajkfajklfjla\nfjadlkfjadlfjas",
  "visibility": true,
  "username": "ppp"
}