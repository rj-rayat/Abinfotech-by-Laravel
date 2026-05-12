import { Button } from "@/components/ui/button"
import { PanelRight } from "lucide-react"
import { SidebarProvider } from "../ui/sidebar"
import { AppSidebar } from "./app-sidebar"
import { Drawer, DrawerClose, DrawerContent, DrawerFooter, DrawerTrigger } from "../ui/drawer"


export function SideBar() {
  return (
    <Drawer direction="right">
      <DrawerTrigger asChild>
        <Button variant="outline"><PanelRight/> </Button>
      </DrawerTrigger>
      <DrawerContent>
        
        <div className="no-scrollbar overflow-y-auto px-4">
          <SidebarProvider defaultOpen={true}>
          <AppSidebar />
        </SidebarProvider>
        </div>
        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
