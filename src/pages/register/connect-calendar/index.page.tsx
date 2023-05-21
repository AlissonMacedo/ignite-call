import { Button, Heading, MultiStep, Text, TextInput } from "@ignite-ui/react";
import { Container, Header } from "../styles";
import { ArrowRight } from "phosphor-react";
import { z } from "zod";
import { ConnectBox, ConnectItem } from "./styles";
import { signIn } from "next-auth/react";


const registerFormSchema = z.object({
  username: z.string()
  .min(3, { message: 'O usuário precisa ter pelo menos 3 letras.' })
  .regex(/^([a-z\\-]+)$/i, { message: 'O usuario pode ter apenas letras e hifens.'})
  .transform((username) => username.toLocaleLowerCase()),
  name: z.string().min(3, { message: 'O nome preicsa ter pelo menos 3 letras.'})
})

type RegisterFormData = z.infer<typeof registerFormSchema>

export default function Register() {


  async function handleRegister(data: RegisterFormData) {
  }


  return (
    <Container>
      <Header>
        <Heading as="strong">Conect sua agenda!</Heading>
        <Text>
          Conecte seu calendario para verificar automaticamente as horas
          ocupadas e os novos eventos à medida que são agendados.
        </Text>

        <MultiStep size={4} currentStep={2} />
      </Header>
      <ConnectBox>
        <ConnectItem>
          <Text>Google Calendar</Text>
          <Button variant="secondary" size="sm" onClick={() => signIn('google')}>Conectar
            <ArrowRight />
          </Button>
        </ConnectItem>
        <Button type="submit">
          Próximo passo
          <ArrowRight />
        </Button>
      </ConnectBox>
    </Container>
  )
}