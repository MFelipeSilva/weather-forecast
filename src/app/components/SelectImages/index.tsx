import sol from "@/assets/icons/sol.svg";
import neve from "@/assets/icons/neve.svg";
import chuva from "@/assets/icons/chuva.svg";
import vento from "@/assets/icons/vento.svg";
import nublado from "@/assets/icons/nuvemesol.svg";


export const selectImage = (data: any) => {
  switch (data?.weather[0]?.description) {
    case "céu limpo":
      return sol.src;
      break;
    case "chuva moderada":
      return chuva.src;
      break;
    case "chuva leve":
      return chuva.src;
      break;
    case "neve":
      return neve.src;
      break;
    case "nublado":
      return neve.src;
      break;
    case "confusão":
      return vento.src;
      break;
    case "nuvens dispersas":
      return nublado.src;
      break;
    default:
      return nublado.src;
  }
};
