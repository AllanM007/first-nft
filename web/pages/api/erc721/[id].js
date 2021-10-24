const metadata = {
    1: {
      attributes: [
        {
          trait_type: "Shape",
          value: "Sqaure",
        },
        {
          trait_type: "Mood",
          value: "Sad",
        },
      ],
      description: "A cool ape.",
      image: "https://ucarecdn.com/2102ac28-98b7-46fa-bfce-f48f5f55c724/20211021_235120.jpg",
      name: "Bored Ape Yatch Club",
    },

  }; e  
  
  export default function handler(req, res) {
    res.status(200).json(metadata[req.query.id] || {});
  }