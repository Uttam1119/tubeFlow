"use client"

import React, { useState } from "react"
import useChannel from "@/hooks/getChannel"
import { useUserData } from "@/context/UserContext"
import { YoutubeVideoBasicType } from "@/utils/types/youtube/video"
import VideoCard from "@/components/UiSections/Channel/YoutubeVideo/VideoCard"
import PageLoader from "@/components/Loader/PageLoader"
import ChannelSidebar from "@/components/ChannelSidebar"
import ChannelEditors from "@/components/UiSections/Channel/Editor/ChannelEditors"

type ChannelSectionType = string | "videos" | "editors"

function page({ params }: { params: { id: string } }) {
    const { user } = useUserData()
    const { id: channelid } = params

    const [sectionToShow, setSectionToShow] =
        useState<ChannelSectionType>("videos")

    if (!channelid) return
    const { channelDetails, loading, addEditor, uploadVideo, approveVideo } =
        useChannel(channelid as string, user?.id)
    if (loading) {
        return <PageLoader text="Loading Channel Data..." />
    }
    const isOwner = user?.id === channelDetails?.owner

    if (!channelDetails) {
        return <PageLoader text="No channel data..." />
    }

    return (
        <div className="flex">
            <ChannelSidebar
                channelDetails={channelDetails}
                setSectionToShow={setSectionToShow}
                sectionToShow={sectionToShow}
                uploadVideoFn={uploadVideo}
            />

            <div className="flex-1">
                <div className="mt-6 ">
                    {sectionToShow === "videos" && (
                        <>
                            <h1 className="text_sub_heading_size mx-12">
                                Recently Uploaded Videos
                            </h1>
                            <div className="flex flex-col gap-4 mx-6 mt-6">
                                {channelDetails.videos?.length ? (
                                    channelDetails?.videos?.map(
                                        (video: YoutubeVideoBasicType, key) => (
                                            <VideoCard
                                                approveVideoFn={approveVideo}
                                                key={key}
                                                videoDetails={video}
                                                isOwner={isOwner}
                                            />
                                        )
                                    )
                                ) : (
                                    <div className="flex_center w-full h-[20vh]">
                                        <h1>
                                            No Video in tubeFlow history, Please
                                            Upload
                                        </h1>
                                    </div>
                                )}
                            </div>
                        </>
                    )}
                    {sectionToShow === "editors" && (
                        <>
                            {isOwner ? (
                                <ChannelEditors
                                    addEditor={addEditor}
                                    allEditors={channelDetails?.editors}
                                />
                            ) : (
                                <h1>You are Dont have access here</h1>
                            )}
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}

export default page
