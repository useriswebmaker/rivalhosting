import { motion } from 'framer-motion';

// Custom Icons
const CashIcon = () => (
  <img
    src="https://cdn.discordapp.com/emojis/1298513030489051176.webp?size=96&quality=lossless"
    alt="Cash icon"
    width={24}
    height={24}
  />
);

const ModeratorIcon = () => (
  <img
    src="https://cdn.discordapp.com/emojis/1234565312502960241.webp?size=96&quality=lossless"
    alt="Moderator icon"
    width={24}
    height={24}
  />
);

const HammerIcon = () => (
  <img
    src="https://cdn.discordapp.com/emojis/1290393594007654503.gif?size=96&quality=lossless"
    alt="Hammer icon"
    width={24}
    height={24}
  />
);

const HazardIcon = () => (
  <img
    src="https://cdn.discordapp.com/emojis/1297386150113316864.webp?size=96&quality=lossless"
    alt="Hazard icon"
    width={24}
    height={24}
  />
);

const NotepadIcon = () => (
  <img
    src="https://cdn.discordapp.com/emojis/1298517202726551593.gif?size=96&quality=lossless"
    alt="Notepad icon"
    width={24}
    height={24}
  />
);

const MembersIcon = () => (
  <img
    src="https://cdn.discordapp.com/emojis/1234566037132017685.webp?size=96&quality=lossless"
    alt="Members icon"
    width={24}
    height={24}
  />
);

const StaffIcon = () => (
  <img
    src="https://cdn.discordapp.com/emojis/1234564896113557717.webp?size=96&quality=lossless"
    alt="Staff icon"
    width={24}
    height={24}
  />
);

export function TermsSection() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="bg-white shadow-lg rounded-lg p-8 mt-16"
    >
      <h2 className="text-3xl font-bold text-red-700 mb-8 text-center">Terms and Conditions</h2>
      <ul className="space-y-6">
        <li className="flex items-start">
          <CashIcon />
          <div className="ml-2">
            <h3 className="font-bold text-red-800">Refund Policy</h3>
            <p>Full refund available if requested within <strong>12 hours</strong> of purchase.</p>
          </div>
        </li>
        <li className="flex items-start">
          <ModeratorIcon />
          <div className="ml-2">
            <h3 className="font-bold text-red-800">No DDoS or Illegal Activities</h3>
            <p>DDoS attacks or illegal activities will result in immediate service termination without refund.</p>
          </div>
        </li>
        <li className="flex items-start">
          <HammerIcon />
          <div className="ml-2">
            <h3 className="font-bold text-red-800">Fair Use</h3>
            <p>Excessive resource usage may lead to warnings or temporary suspension.</p>
          </div>
        </li>
        <li className="flex items-start">
          <HazardIcon />
          <div className="ml-2">
            <h3 className="font-bold text-red-800">Data Loss</h3>
            <p>We are not responsible for data loss. Regular backups are the user's responsibility.</p>
          </div>
        </li>
        <li className="flex items-start">
          <NotepadIcon />
          <div className="ml-2">
            <h3 className="font-bold text-red-800">Account Termination</h3>
            <p>Accounts violating these terms may be terminated without notice or refund.</p>
          </div>
        </li>
        <li className="flex items-start">
          <MembersIcon />
          <div className="ml-2">
            <h3 className="font-bold text-red-800">Service Modifications</h3>
            <p>We reserve the right to modify services or pricing with notice.</p>
          </div>
        </li>
        <li className="flex items-start">
          <StaffIcon />
          <div className="ml-2">
            <h3 className="font-bold text-red-800">Privacy</h3>
            <p>Your information will remain private and only used for payment processing.</p>
          </div>
        </li>
      </ul>
    </motion.div>
  );
}