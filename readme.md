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


///user


{
  "_id": {
    "$oid": "65fdd55e56f9c06e05a2513a"
  },
  "name": "ppp",
  "email": "ppp@ppp",
  "username": "ppp",
  "password": "$2a$07$Ss9nu.1L9zXk1T6zLEtiH.ImzdaeFrS1FBO3Rp5B.YSTlVoUo6lBG",
  "age": "18",
  "genre": [
    "Romance",
    "Action",
    "Thriller",
    "Fantasy"
  ],
  "articles": [
    "65fdd943adc4fc3372c27617",
    "65fdd998adc4fc3372c27618",
    "5c34fe61-4330-444c-931c-16e934191325",
    "aceea946-ad9b-4805-9a99-cf400cff5f51",
    "90263a64-4817-464c-aa15-9628ba5105dd",
    "3dc5520d-13e4-49fe-8975-8fb7a2b3507a",
    "b3a3cbaf-b9be-4547-9a32-bb21afe9f9a9",
    "42220561-c35d-43bf-a7dd-5b3a7d929aa3",
    "96fed696-a6c2-402f-a3be-a54a43406469",
    "5bd7eee1-1280-4f77-80ae-8891c835e674",
    "273e34ed-1420-48f8-b854-ab94c01ab84b",
    "4f97e53c-8f7e-4847-a811-991c894579bd",
    "3a327f3b-48c5-46f5-b6c7-abef9a5f9830",
    "f9b02d62-82f2-4722-b26f-b5762a9c4c9b",
    "aabd8b63-6dd0-4d04-8722-14ba596897ba",
    "3cadc957-1892-4a3e-86f0-a7d2c0f9ecab",
    "19f7cbb3-00d5-46cb-8ab0-b7e7e29b64b0",
    "4c851d71-1809-4410-83c0-b3cfd7a8910b",
    "ddce88c2-802e-425d-a5f8-a49bd7c2a773",
    "b9bb57ff-b0de-4a5f-a3e7-48c108ea7e02",
    "6c4f8668-9407-4518-9e10-7237dcbdb1de"
  ]
}


//articles
{
  "_id": {
    "$oid": "65fe5aa6d122f7ae90876f1f"
  },
  "articleId": "96fed696-a6c2-402f-a3be-a54a43406469",
  "title": "The Enchanted Forest",
  "description": "Journey through a magical realm where creatures of myth and legend roam, and wonders beyond imagination await.",
  "genre": "Fantasy",
  "tags": "Enchantment, Adventure, Mythical Creatures",
  "ageGroup": "13-18",
  "content": "In the heart of the Enchanted Forest,\nWhere ancient trees whisper secrets,\nAnd fairy lights dance in the night,\nA world of magic comes to life.\n\nDragons soar high in the sky,\nTheir scales shimmering like gems,\nGuardians of the mystical realm,\nWhere dreams and reality blend.\n\nElves with bows of silver thread,\nMove with grace, swift and sure,\nGuardians of the ancient woods,\nProtectors of the pure.\n\nUnicorns with coats of white,\nGraceful and majestic in flight,\nTheir horns aglow with starlight,\nGuiding travelers through the night.\n\nWizards weave spells of wonder,\nCreating magic in every breath,\nThe power of imagination unleashed,\nIn a world where anything is possible.\n\nSo come, brave adventurer,\nEmbark on a journey of fantasy,\nWhere legends come alive,\nIn the Enchanted Forest's embrace.",
  "visibility": true,
  "comments": [
    {
      "comment": "heshe",
      "username": "ppp",
      "articleId": "96fed696-a6c2-402f-a3be-a54a43406469"
    }
  ],
  "username": "ppp"
}