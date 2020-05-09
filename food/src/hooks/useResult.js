import { useState, useEffect } from 'react';
import yelp from '../api/yelp';



export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const searchApi = async (searchItem) => {
    console.log('Hey i am Inside ');
    try {
      let responce = [];
      // const responce = await yelp.get('/search', {
      //   params: {
      //     limit: 50,
      //     term: searchItem,
      //     location: 'san jose'
      //   }
      // });
      // const responce = undefined;
      if (searchItem === 'pasta') {
        responce = [
          {
            name: 'Burger King',
            rating: 4.5,
            price: '$',
            url: '../../assets/beach.jpg'
          },
          {
            name: 'Dominous',
            rating: 4,
            price: '$$',
            url: '../../assets/beach.jpg'
          },
          {
            name: 'Pizzahut',
            rating: 4,
            price: '$$$',
            url: '../../assets/beach.jpg'
          },
          {
            name: 'HOtel #1',
            rating: 4,
            price: '$',
            url: '../../assets/beach.jpg'
          },
          {
            name: 'HOtel #2',
            rating: 4,
            price: '$',
            url: '../../assets/beach.jpg'
          },
          {
            name: 'HOtel #3',
            rating: 4,
            price: '$$$',
            url: '../../assets/beach.jpg'
          },
          {
            name: 'HOtel #4',
            rating: 4,
            price: '$$',
            url: '../../assets/beach.jpg'
          },
          {
            name: 'HOtel #5',
            rating: 4,
            price: '$',
            url: '../../assets/beach.jpg'
          },
        ]
      } else {
        responce = [
          {
            name: 'Signature',
            rating: 4,
            price: '$',
            url: "require()"
          },
          {
            name: 'Kulsum',
            rating: 4,
            price: '$$',
            url: '../../assets/beach.jpg'
          },
          {
            name: 'Maa Kali',
            rating: 4,
            price: '$',
            url: '../../assets/beach.jpg'
          },
          {
            name: 'Anna',
            rating: 5,
            price: '$$$',
            url: '../../assets/beach.jpg'
          },
          {
            name: 'HOtel #1',
            rating: 4,
            price: '$',
            url: '../../assets/beach.jpg'
          },
          {
            name: 'HOtel #2',
            rating: 4,
            price: '$$',
            url: '../../assets/beach.jpg'
          },
          {
            name: 'HOtel #3',
            rating: 4,
            price: '$',
            url: '../../assets/beach.jpg'
          },
          {
            name: 'HOtel #4',
            rating: 4,
            price: '$$$',
            url: '../../assets/beach.jpg'
          },
          {
            name: 'HOtel #5',
            rating: 4,
            price: '$',
            url: '../../assets/beach.jpg'
          },
          {
            name: 'HOtel #6',
            rating: 4,
            price: '$$$',
            url: '../../assets/beach.jpg'
          },
          {
            name: 'HOtel #7',
            rating: 4,
            price: '$$$',
            url: '../../assets/beach.jpg'
          },
          {
            name: 'HOtel #8',
            rating: 4,
            price: '$$',
            url: '../../assets/beach.jpg'
          },
        ]
      }

      console.log("Responce   ---> ", searchItem, responce);
      setResults(responce);
      setErrorMessage('');
    } catch (err) {
      setErrorMessage('Some thing went Wrong');
    }
  }

  useEffect(() => {
    searchApi('pasta');
  }, []);

  return [searchApi, results, errorMessage];
}