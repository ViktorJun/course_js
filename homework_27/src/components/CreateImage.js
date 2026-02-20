import {Image} from "react-bootstrap";

export function CreateImage({srcImage, altText, width, height}) {
    return(
        <Image
            src={srcImage}
            roundedCircle
            className="d-block mx-auto"
            style={{ width: width, height: height, objectFit: "cover" }}
            alt={altText}
        />
    );
}