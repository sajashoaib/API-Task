import React, { useState, useEffect } from 'react';

const inputsArray = [
  {
    id: 'name',
    name: 'name',
    type: 'text',
    label: 'name',
  },
  {
    id: 'cities',
    name: 'cities',
    type: 'textarea',
    label: 'cities',
  },
];

const PostForm = (props) => {
  const [formData, setFormData] = useState({
    name: '',
    cities: '',
    isGetFirstTimeData: true,
  });

  useEffect(() => {
    if (props.post && formData.isGetFirstTimeData) {
      setFormData({
        ...formData,
        name: props.post.name,
        cities: props.post.cities,
        isGetFirstTimeData: false,
      });
    }
  }, [props.post, formData.isGetFirstTimeData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: formData.name,
      cities: formData.cities,
    };
    props.handleSubmit(data);
  };

  const handleChangeInput = (e) => {
    const { value, name } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <form onSubmit={handleSubmit}>
      {inputsArray.map((input) => (
        <div key={input.id}>
          <label htmlFor={input.id}>{input.label}</label>
          {input.type === 'textarea' ? (
            <textarea
              id={input.id}
              name={input.name}
              value={formData[input.id]}
              onChange={handleChangeInput}
              style={{
                padding: 10,
                width: 300,
              }}
            />
          ) : (
            <input
              type={input.type}
              id={input.id}
              name={input.name}
              value={formData[input.id]}
              onChange={handleChangeInput}
              style={{
                padding: 10,
                width: 300,
              }}
            />
          )}
        </div>
      ))}

      <button type='submit'>
        {props.isLoading ? 'Loading...' : 'Submit'}
      </button>
    </form>
  );
};

export default PostForm;
