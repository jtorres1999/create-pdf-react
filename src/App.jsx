import createpdf from "./components/createpdf";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";

function App() {
  return (
    <div>
      <PDFDownloadLink document={<createpdf />} fileName="promoFacebook.pdf">
        {({ loading, url, error, blob }) =>
          loading ? (
            <button>Loading Document ...</button>
          ) : (
            <button>Descargar Aqui!</button>
          )
        }
      </PDFDownloadLink>

      <PDFViewer>
        <createpdf />
      </PDFViewer>
    </div>
  );
}

export default App;