export const stockUtil = (cantidad) => {
    if (cantidad <= 0) {
      return '¡Sin unidades disponibles!';
    } else if (cantidad <= 5) {
      return '¡Quedan pocas unidades!';
    } else {
      return null;
    }
  };