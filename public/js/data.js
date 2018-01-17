window.Data = (function () {
  function generateVoteCount() {
    return Math.floor((Math.random() * 50) + 15);
  }

  const products = [
    {
      id: 1,
      title: 'Stephen King: It',
      description: '7 children are terrorized by an entity that exploits their fears.',
      url: '#',
      votes: generateVoteCount(),
      submitterAvatarUrl: 'images/avatars/daniel.jpg',
      productImageUrl: 'images/products/image-aqua.png',
    },
    {
      id: 2,
      title: 'Michael Connelly: The Poet',
      description: 'Reporter Jack McEvoy writes about the death of his detective brother.',
      url: '#',
      votes: generateVoteCount(),
      submitterAvatarUrl: 'images/avatars/kristy.png',
      productImageUrl: 'images/products/image-rose.png',
    },
    {
      id: 3,
      title: 'Donna Tartt: The Secret History',
      description: 'The effects of a friend\'s death on a group of close knit college students.',
      url: '#',
      votes: generateVoteCount(),
      submitterAvatarUrl: 'images/avatars/veronika.jpg',
      productImageUrl: 'images/products/image-steel.png',
    },
    {
      id: 4,
      title: 'Cormac McCarthy: No Country for Old Men',
      description: 'The story of three men and a drug deal gone bad in southwest Texas.',
      url: '#',
      votes: generateVoteCount(),
      submitterAvatarUrl: 'images/avatars/molly.png',
      productImageUrl: 'images/products/image-yellow.png',
    },
  ];

  return { products: products };
}());
