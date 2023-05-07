


while getopts b:p: flag
do
    case "${flag}" in
        b) build=${OPTARG};;
        p) push=${OPTARG};;
    esac
done

# Build

if [ "$build" = true ] ; then
    echo "Building.."
    sudo docker build backend/ -t dahol/inventoryjs-backend
    sudo docker build frontend/ -t dahol/inventoryjs-frontend
    echo "Done building!"
else
    echo "Skipping build.."
fi

# Push

if [ "$push" = "true" ] ; then
    echo "Pushing.."
    sudo docker push dahol/inventoryjs-backend
    sudo docker push dahol/inventoryjs-frontend
    echo "Done pushing!"
else
    echo "Skipping push.."
fi