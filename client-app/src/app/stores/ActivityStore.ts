import { makeAutoObservable, runInAction } from "mobx";
import agent from "../api/agent";
import { Activity } from "../models/activity";

class ActivityStore {
    activityRegistry = new Map<string, Activity>();
    selectedActivity: Activity | undefined = undefined;
    editMode = false;
    loading = false;
    loadingInitial = false;

    constructor() {
        makeAutoObservable(this);
    }

    get activitiesByDate(){
        return Array.from(this.activityRegistry.values()).sort((a, b) => 
        Date.parse(a.date) - Date.parse(b.date));
    }

    loadActivities = async () => {
        this.setLoadingInitial(true);
        try {
            const activities = await agent.Activities.list();
            activities.forEach((a) => {
                this.setActivity(a);
            });
            this.setLoadingInitial(false);
            
        } catch (e) {
            console.log(e);
            this.setLoadingInitial(false);
        }
    };

    loadActivity = async (id:string) => {
        let activity = this.getActivity(id);
        if(activity){
            this.setSelectedActivity(activity);
            return activity;
        }else{
            this.setLoadingInitial(true);
            try{
                activity = await agent.Activities.details(id);
                this.setActivity(activity);
                this.setSelectedActivity(activity);
                this.setLoadingInitial(false);
                return activity;
            }catch(e){
                console.log(e);
                this.setLoadingInitial(false);
            }
        }
    }

    private setActivity = (activity: Activity) => {        
        activity.date = activity.date.split("T")[0];
        this.activityRegistry.set(activity.id, activity);
    }

    private getActivity = (id:string) => {
        return this.activityRegistry.get(id);
    }

    private setSelectedActivity(activity: Activity){
        this.selectedActivity = activity;
    }

    setLoadingInitial = (state:boolean) =>{
        this.loadingInitial = state;
    }

    createActivity = async (activity:Activity) => {
        this.loading = true;
        await agent.Activities.create(activity);
        try{
            this.activityRegistry.set(activity.id, activity);
            this.selectedActivity = activity;
            this.editMode = false;
            this.loading = false;
        }catch(e){
            console.log(e);
            runInAction(()=>{
                this.editMode = false;
                this.loading = false;
            })
        }
    }

    updateActivity = async (activity:Activity) => {
        this.loading = true;
        await agent.Activities.update(activity);
        try{
            this.activityRegistry.set(activity.id, activity);
            this.selectedActivity = activity;
            this.editMode = false;
            this.loading = false;
        }catch(e){
            console.log(e);
            runInAction(()=>{
                this.editMode = false;
                this.loading = false;
            })
        }
    }

    deleteActivity = async (id: string) => {
        this.loading = true;
        try{
            await agent.Activities.delete(id);
            runInAction(()=>{
                this.activityRegistry.delete(id);
                this.loading = false;
            });
        }catch(e){
            console.log(e);
            runInAction(() =>{
                this.loading = false;
            });
        }
    }
}

export default ActivityStore;
