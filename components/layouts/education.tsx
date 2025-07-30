import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import { CircleDot, Check } from "lucide-react"

export function Education() {
    return (
        <div className="flex flex-col items-center justify-center w-full my-8">
            <Tabs defaultValue="experience" className="w-[400px]">
                <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="experience">Experience</TabsTrigger>
                    <TabsTrigger value="education">Education</TabsTrigger>
                    <TabsTrigger value="certifications">Certifications</TabsTrigger>
                </TabsList>
                <TabsContent value="education">
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-2xl font-normal">Education</CardTitle>
                            <CardDescription>
                                My educational journey
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <ul className="space-y-2">
                                <li className="border-t border-muted-foreground/20 pt-4">
                                    <div className="flex justify-between items-center">
                                        <div className="text-lg font-semibold">LNCT, Bhopal</div>
                                        <span className="text-md text-muted-foreground flex items-center gap-1">
                                            <CircleDot className="w-4 h-4 text-yellow-400 mr-1" strokeWidth={5} />
                                            Studying
                                        </span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <div className="text-md text-muted-foreground">B.Tech - CSE (AIML)</div>
                                        <span className="text-md text-muted-foreground">CGPA - 8.45</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <div className="text-md text-muted-foreground">University - RGPV</div>
                                    </div>
                                </li>
                                <li className="border-t border-muted-foreground/20 pt-4">
                                    <div className="flex justify-between items-center">
                                        <div className="text-lg font-semibold">Dev Public School, Jashpur</div>
                                        <span className="text-md text-muted-foreground flex items-center gap-1">
                                            <Check className="w-4 h-4 text-green-500 mr-1" strokeWidth={5} />
                                            2021-22
                                        </span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <div className="text-md text-muted-foreground">
                                            Board - CBSE
                                        </div>
                                        <span className="text-md text-muted-foreground">Score - 88.8%</span>
                                    </div>
                                </li>
                                <li className="border-t border-muted-foreground/20 pt-4">
                                    <div className="flex justify-between items-center">
                                        <div className="text-lg font-semibold">Kendriya Vidyalaya, Jashpur</div>
                                        <span className="text-md text-muted-foreground flex items-center gap-1">
                                            <Check className="w-4 h-4 text-green-500 mr-1" strokeWidth={5} />
                                            2019-20
                                        </span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <div className="text-md text-muted-foreground">
                                            Board - CBSE
                                        </div>
                                        <span className="text-md text-muted-foreground">Score - 92.8%</span>
                                    </div>
                                </li>
                            </ul>
                        </CardContent>
                    </Card>
                </TabsContent>
                <TabsContent value="experience">
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-2xl font-normal">Experience</CardTitle>
                            <CardDescription>
                                My work experience
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <ul className="space-y-2">
                                <li className="border-t border-muted-foreground/20 pt-4">
                                    <div className="flex justify-between items-center">
                                        <div className="text-lg font-semibold">We Win Limited, Bhopal</div>
                                        <span className="text-md text-muted-foreground flex items-center gap-1">
                                            {/* <CircleDot className="w-4 h-4 text-yellow-400 mr-1" strokeWidth={5} /> */}
                                            <Check className="w-4 h-4 text-green-500 mr-1" strokeWidth={5} />
                                            Completed
                                        </span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <div className="text-md text-muted-foreground">Intern - React Developer</div>
                                        <span className="text-md text-muted-foreground">Apr &apos;25 - July &apos;25</span>
                                    </div>
                                </li>
                            </ul>
                        </CardContent>
                    </Card>
                </TabsContent>
                <TabsContent value="certifications">
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-2xl font-normal">Certifications</CardTitle>
                            <CardDescription>
                                My certifications
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <ul className="space-y-2">
                                <li className="border-t border-muted-foreground/20 pt-4">
                                    <div className="flex justify-between items-center">
                                        <div className="text-lg font-semibold flex items-center gap-1">
                                            Infosys
                                        </div>
                                        <span className="text-md text-muted-foreground flex items-center gap-1">
                                            <Check className="w-4 h-4 text-green-400 mr-1" strokeWidth={5} />
                                            Certified
                                        </span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <div className="text-md text-muted-foreground">
                                            Java Language & SE8 Features
                                        </div>
                                        <span className="text-md text-muted-foreground">Dec &apos;24</span>
                                    </div>
                                </li>
                                <li className="border-t border-muted-foreground/20 pt-4">
                                    <div className="flex justify-between items-center">
                                        <div className="text-lg font-semibold flex items-center gap-1">
                                            ServiceNow
                                        </div>
                                        <span className="text-md text-muted-foreground flex items-center gap-1">
                                            <Check className="w-4 h-4 text-green-400 mr-1" strokeWidth={5} />
                                            Certified
                                        </span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <div className="text-md text-muted-foreground">
                                            Introduction to the Platform
                                        </div>
                                        <span className="text-md text-muted-foreground">Nov &apos;24</span>
                                    </div>
                                </li>
                                <li className="border-t border-muted-foreground/20 pt-4">
                                    <div className="flex justify-between items-center">
                                        <div className="text-lg font-semibold flex items-center gap-1">
                                            Cisco
                                        </div>
                                        <span className="text-md text-muted-foreground flex items-center gap-1">
                                            <Check className="w-4 h-4 text-green-400 mr-1" strokeWidth={5} />
                                            Certified
                                        </span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <div className="text-md text-muted-foreground">
                                            Virtual Internship in Networking
                                        </div>
                                        <span className="text-md text-muted-foreground">July &apos;24</span>
                                    </div>
                                </li>
                            </ul>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    )
}
