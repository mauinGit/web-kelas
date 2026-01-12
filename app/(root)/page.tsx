'use client'
import { Button } from "@/components/ui/button";
import Modal from "@/components/ui/modal";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="p-12">
      <Button onClick={() => {}}>
        <UserButton afterSignOutUrl="/sign-in" /> 
      </Button>
      <Modal title="Test-title" description="Test-description" isOpen={true} onClose={() => {}}>
        Children
      </Modal>
    </div>
  );
}
