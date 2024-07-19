import { StyledPdfViewer } from "./PdfViewer.styled";

const PdfViewer = ({ url }) => {
	return <StyledPdfViewer src={url} title="PDF Viewer" />;
};

export default PdfViewer;
