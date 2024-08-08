// Mengimpor gambar logo devcode yang berada di dalam folder assets
import devcodeLogo from "../../assets/devcode-logo.png";
import "./style.css";

export const HelloWorld = () => {
  return (
    <div className="hello">
      {/* Menambahkan gambar logo devcode ke dalam properti src pada elemen img di bawah ini */}
      <img data-cy="devcode-logo" src={devcodeLogo} alt="devcode logo" />
      <div data-cy="devcode-title">
        {/* Menambahkan elemen heading 1 dengan kalimat "I'm ready for the next challenge!" */}
        <h1>I'm ready for the next challenge!</h1>
      </div>
    </div>
  );
};