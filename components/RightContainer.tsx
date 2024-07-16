import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import dynamic from 'next/dynamic';
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

const EditorComponent = dynamic(() => import('./EditorComponent'), { ssr: false });


const RightContainer: React.FC = () => {
    return (
        <div className="h-full w-full overflow-auto">
            <Tabs defaultValue="note" className="basis-full">
                <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="note">笔记</TabsTrigger>
                    <TabsTrigger value="tags">标签列表</TabsTrigger>
                    <TabsTrigger value="mindmap">思维导图</TabsTrigger>
                    <TabsTrigger value="chat">问答</TabsTrigger>
                </TabsList>
                <TabsContent value="note" className="h-max">
                    <Card className="h-full">
                        <CardContent className="space-y-2">
                            <EditorComponent />
                        </CardContent>
                        <CardFooter>
                            <Button>Save</Button>
                        </CardFooter>
                    </Card>
                </TabsContent>
                <TabsContent value="tags" className="h-max">
                    <Card className="h-full">
                        <CardContent className="space-y-2">
                            this is tag page
                        </CardContent>
                    </Card>
                </TabsContent>
                <TabsContent value="mindmap">
                    <Card>
                        <TabsContent value="mindmap">
                        this is mindmap
                </TabsContent>
                    </Card>
                </TabsContent>
                <TabsContent value="chat" className="h-full">
                    this is chat page
                </TabsContent>
            </Tabs>
        </div>
    )
}

export default RightContainer;