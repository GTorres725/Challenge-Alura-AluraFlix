import React, { useState } from 'react';
import './AddVideo.css';

const AddVideo = ({ onAdd, categories }) => {
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    thumbnail: '',
    video: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.title) newErrors.title = 'O título é obrigatório';
    if (!formData.category) newErrors.category = 'A categoria é obrigatória';
    if (!formData.thumbnail) newErrors.thumbnail = 'O link da imagem é obrigatório';
    if (!formData.video) newErrors.video = 'O link do vídeo é obrigatório';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    onAdd({ ...formData });
    setFormData({
      title: '',
      category: '',
      thumbnail: '',
      video: '',
    });
    setErrors({});
  };

  const handleClear = () => {
    setFormData({
      title: '',
      category: '',
      thumbnail: '',
      video: '',
    });
    setErrors({});
  };

  return (
    <form className="add-video" onSubmit={handleSubmit}>
      <h3>Adicionar Novo Vídeo</h3>

      <label>Título</label>
      <input
        type="text"
        name="title"
        placeholder="Digite o título"
        value={formData.title}
        onChange={handleChange}
      />
      {errors.title && <span className="error">{errors.title}</span>}

      <label>Categoria</label>
      <select
        name="category"
        value={formData.category}
        onChange={handleChange}
      >
        <option value="">Selecione uma categoria</option>
        {categories.map((cat, index) => (
          <option key={index} value={cat}>
            {cat}
          </option>
        ))}
      </select>
      {errors.category && <span className="error">{errors.category}</span>}

      <label>Imagem</label>
      <input
        type="text"
        name="thumbnail"
        placeholder="URL da imagem"
        value={formData.thumbnail}
        onChange={handleChange}
      />
      {errors.thumbnail && <span className="error">{errors.thumbnail}</span>}

      <label>Vídeo</label>
      <input
        type="text"
        name="video"
        placeholder="URL do vídeo"
        value={formData.video}
        onChange={handleChange}
      />
      {errors.video && <span className="error">{errors.video}</span>}

      <div className="buttons">
        <button type="submit" className="btn">Adicionar</button>
        <button type="button" className="btn btn-clear" onClick={handleClear}>
          Limpar
        </button>
      </div>
    </form>
  );
};

AddVideo.defaultProps = {
  categories: ['Front-End', 'Back-End', 'Mobile']
};

export default AddVideo;
