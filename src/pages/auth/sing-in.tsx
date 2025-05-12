import { Helmet } from 'react-helmet-async'
import { Button } from '../../components/ui/button'
import { Label } from '../../components/ui/label'
import { Input } from '../../components/ui/input'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { toast } from 'sonner'
import { Link } from 'react-router-dom'




const signInForm = z.object({
    email: z.string().email()
})

type SignInForm = z.infer<typeof signInForm>
export function SingIn() {

    const { register, handleSubmit, formState: { isSubmitting } } = useForm<SignInForm>()

    async function handleSingIn(data: SignInForm) {
        try {
            console.log(data);
            await new Promise((resolve) => setTimeout(resolve, 2000));
            toast.success('Enviamos um link de authenticação para seu email.', {
                action: {
                    label: 'Reenviar',
                    onClick: () => handleSingIn(data),
                }
            })

        } catch {
            toast.error('Credenciais inválidas.')
        }

    }
    return (
        <>
            <Helmet title='Login' />
            <div className='p-8'>
                <Button asChild className='absolute right-4 top-8' variant={'default'}>
                    <Link to='/sing-up' className=''>
                        Novo estabelecimento
                    </Link>
                </Button>

                <div className='flex w[350px] flex-col justify-center gap-6'>
                    <div className='flex flex-col gap-2 text-center'>
                        <h1 className='text-2xl font-semibold tracking-tight'>
                            Acessar painel
                        </h1>
                        <p className='tetx-sm text-muted-forenground'>
                            Acompanhe seas vendas pelo painel de parceiro
                        </p>
                    </div>
                    <form onSubmit={handleSubmit(handleSingIn)} className='space-y-4'>
                        <div className='space-y-2'>
                            <Label htmlFor='email'>Seu Email</Label>
                            <Input id='email' type='email'{...register('email')} />
                        </div>
                        <Button variant={'destructive'} disabled={isSubmitting} className='w-full' type="submit"> Acessar painel</Button>
                    </form>
                </div>
            </div>

        </>
    )
}