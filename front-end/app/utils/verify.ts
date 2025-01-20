export function verify(type: string, value: string) {
  console.log({ type, value });

  if (type === "Email") {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!value.length) {
      throw new Error("Digite o E-mail!");
    }
    if (!emailRegex.test(value)) {
      throw new Error("O E-mail é inválido!");
    }
  }

  if (type === "password") {
    if (!value.length) {
      throw new Error("Digite a senha!");
    }
  }
}
