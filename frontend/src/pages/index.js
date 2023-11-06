import { useState } from 'react';
import axios from 'axios';

import Container from '@/components/Container';
import Form from '@/components/Form';

const Home = () => {
  const [imagesList, setImagesList] = useState([]);
  const [inputText, setInputText] = useState('');
  const [imageSize, setImageSize] = useState('medium');
  const [imageQuantity, setImageQuantity] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const { data } = await axios.post(
        'http://localhost:5001/openai/generate-image',
        {
          inputText,
          imageSize,
          imageQuantity,
        }
      );
      setIsLoading(false);
      setImagesList(data?.data);
    } catch (error) {
      setIsLoading(false);
    }
  };

  return (
    <Container>
      <div className='bg-yellow-300 w-full h-1/2 p-4 lg:p-12 xl:p-16 2xl:p-20'>
        <h4 className='text-black text-4xl font-bold text-center mb-12'>
          Search image from openai
        </h4>
        <Form
          handleSubmit={handleSubmit}
          inputText={inputText}
          setInputText={setInputText}
          imageSize={imageSize}
          setImageSize={setImageSize}
          imageQuantity={imageQuantity}
          setImageQuantity={setImageQuantity}
        />
      </div>
      {
        <>
          {isLoading ? (
            <h5 className='text-black text-lg text-center'>Loading...</h5>
          ) : (
            <div className='w-full h-1/2 p-4 lg:p-12 xl:p-16 2xl:p-20 flex gap-4 flex-wrap'>
              {imagesList.map(({ url }) => (
                <div key={url} className={`h-[${imageSize}px] w-[${imageSize}px] border-[2px] border-white shadow-2xl`}>
                  <img
                    src={url}
                    className={`h-[${imageSize}px] w-[${imageSize}px]`}
                  />
                </div>
              ))}
            </div>
          )}
        </>
      }
    </Container>
  );
};

export default Home;
