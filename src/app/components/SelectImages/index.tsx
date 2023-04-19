import sol from "@/assets/icons/sol.svg";
import neve from "@/assets/icons/neve.svg";
import chuva from "@/assets/icons/chuva.svg";
import vento from "@/assets/icons/vento.svg";
import nublado from "@/assets/icons/nuvemesol.svg";


export const selectImage = (data: any) => {
  switch (data?.weather[0]?.description) {
    case "céu limpo":
      return sol.src;

    case "chuva moderada":
      return chuva.src;

    case "chuva leve":
      return chuva.src;

    case "neve":
      return neve.src;

    case "nublado":
      return neve.src;

    case "confusão":
      return vento.src;

    case "nuvens dispersas":
      return nublado.src;

    default:
      return nublado.src;
  }
};
