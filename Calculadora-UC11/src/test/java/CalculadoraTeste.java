import org.junit.Test;
import org.junit.jupiter.api.Assertions;


public class CalculadoraTeste {

    @Test
    public void somaDoisNumeros(){
        Calculadora calculadora = new Calculadora();
        float soma = calculadora.soma(1, 0);
        Assertions.assertEquals(1, soma);
    }

    @Test
    public void subtraiDoisNumeros(){
        Calculadora calculadora = new Calculadora();
        float subtracao = calculadora.subtracao(20, 8);
        Assertions.assertEquals(12, subtracao);
    }

    @Test
    public void multiplicaDoisNumeros(){
        Calculadora calculadora = new Calculadora();
        float multiplicacao = calculadora.multiplicacao(4, 6);
        Assertions.assertEquals(24, multiplicacao);
    }

    @Test
    public void divideDoisNumeros(){
        Calculadora calculadora = new Calculadora();
        float divisao = calculadora.divisao(1000, 10);
        Assertions.assertEquals(100, divisao);
    }
}
