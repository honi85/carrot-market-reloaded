import FormButton from "../components/button";
import FormInput from "../components/input";

export default function SMSLogIn() {
  return (
    <div className="flex flex-col gap-10 px-6 py-8">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">SMS Login</h1>
        <h2 className="text-xl">Veiify your phone number</h2>
      </div>
      <form className="flex flex-col gap-3">
        <FormInput
          required
          type="number"
          placeholder="Phone number"
          errors={[]}
        />
        <FormInput
          required
          type="number"
          placeholder="Verification code"
          errors={[]}
        />
        <FormButton loading={false} text="Verify" />
      </form>
    </div>
  );
}
