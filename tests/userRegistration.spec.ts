import { test, expect } from '@playwright/test';

// Bloco principal de testes
test.describe('Formulário de Registro', () => {

  test('Preenchimento com sucesso', async ({ page }) => {
  await page.goto('/automation-practice-form');
 // acessa o site do formulário

    await page.fill('#firstName', 'Renato');           // preenche nome
    await page.fill('#lastName', 'Moura');             // preenche sobrenome
    await page.fill('#userEmail', 'renato@mail.com');  // email válido
    await page.click('label[for="gender-radio-1"]');   // seleciona sexo masculino
    await page.fill('#userNumber', '11999999999');     // telefone
    await page.click('#submit');                       // envia o formulário

    const sucesso = page.locator('#example-modal-sizes-title-lg');
    await expect(sucesso).toHaveText('Thanks for submitting the form');
  });

  test('Erro ao enviar vazio', async ({ page }) => {
   await page.goto('/automation-practice-form');
    await page.waitForLoadState('networkidle'); // <-- espera todos os recursos carregarem
    await page.click('#submit');


    const campoErro = page.locator('.was-validated'); // simulando erro genérico
    await expect(campoErro).toBeVisible(); // esperamos ver uma mensagem de erro
  });
});
