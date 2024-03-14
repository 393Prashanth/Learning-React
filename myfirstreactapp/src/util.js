export default function getImageUrl(person,size='s'){

    return(   
    'https://i.imgur.com/' +
    person.imageId +
    size +
    '.jpg'
        
    );
}



export function getImageUrl1(imageId, size = 's') {
    return (
      'https://i.imgur.com/' +
      imageId +
      size +
      '.jpg'
    );
  }
  

  export function getImageUrl2(person) {
    return (
      'https://i.imgur.com/' +
      person.imageId +
      's.jpg'
    );
  }
  