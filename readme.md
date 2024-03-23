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



{
  title ; HOME
  description: An emotional powerhouse of a novel about a modern Odysseus returning to a 1950s America mined with lethal pitfalls for       an unwary Black man.

  genre - ['Romance', 'Thriller', 'Sci-Fi', 'Mystery', 'Fantasy']
  content - "An emotional powerhouse of a novel about a modern Odysseus returning to a 1950s America mined with lethal pitfalls for an unwary Black man. The protagonist, a seasoned seafarer, embarks on a journey that takes him through the tumultuous waves of racial prejudice and societal injustice. His voyage is not just a physical journey, but also a deep exploration of his own identity, the concept of home, and the unyielding human spirit. The narrative is beautifully interwoven with elements of Romance, Thriller, Sci-Fi, Mystery, and Fantasy, making it a compelling read that leaves a lasting impression."
  username: "Toni Morrison"
  ageGroup - 
  content - 
  username: Toni Morrison

}

{
    "title": "We have always lived in a castle",
    "description": "A thrilling novel about two sisters who live in isolation from the world, with their own unique rules and rituals. When their cousin arrives, their peaceful existence is disrupted, leading to a series of unsettling events.",
    "genre": "Mystery",
    "content": "The novel is a gripping tale of suspense and intrigue, exploring themes of family, isolation, and the destructive power of secrets. The narrative is beautifully crafted, with a chilling atmosphere that keeps the readers on the edge of their seats.",
    "ageGroup": "18+",
    "username": "Shirley Jackson"
}