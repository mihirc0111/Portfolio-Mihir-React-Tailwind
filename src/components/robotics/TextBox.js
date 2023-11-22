// TextBox.js
const TextBox = ({ text }) => {
  return (
    <div className="font-bodyFont text-lightText text-base space-y-4 p-4 m-3"> 
      {text.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
  );
}

export default TextBox;