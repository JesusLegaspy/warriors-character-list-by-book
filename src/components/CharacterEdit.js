import { useState, useContext } from "react";
import myCharacterContext from "../context/characters";

const CharacterEdit = ({ character, setShowEdit }) => {
  const { editCharacterById, deleteCharacterById } = useContext(myCharacterContext);

  const [name, setName] = useState(character.name);
  const [description, setDescription] = useState(character.description);
  const [imageUrl, setImageUrl] = useState(character.image);

  const handleName = (event) => {
    setName(event.target.value);
  };

  const handleDescription = (event) => {
    setDescription(event.target.value);
  };

  const handleImage = (event) => {
    setImageUrl(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    editCharacterById(character.id, { name, description, image: imageUrl });
    setShowEdit(false);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input id="name" type="text" onChange={handleName} value={name} />
        <label htmlFor="description">Description</label>
        <input id="description" type="text" onChange={handleDescription} value={description} />
        <label htmlFor="imageUrl">Image Url</label>
        <input id='imageUrl' type="text" onChange={handleImage} value={imageUrl} />
        <button className="bg-green-200 hover:bg-green-100 active:bg-green-300 py-2 px-4">Submit</button>
      </form>
    </div>
  );
};

export default CharacterEdit;