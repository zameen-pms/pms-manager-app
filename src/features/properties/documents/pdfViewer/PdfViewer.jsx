import { Viewer, Worker } from "@react-pdf-viewer/core";
import { StyledPdfViewer } from "./PdfViewer.styled";

const PdfViewer = ({ url }) => {
	return (
		<StyledPdfViewer>
			<Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
				<Viewer fileUrl={url} />
			</Worker>
		</StyledPdfViewer>
	);
};

export default PdfViewer;
