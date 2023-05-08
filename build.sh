


while getopts b:p: flag
do
    case "${flag}" in
        b) build=${OPTARG};;
        p) push=${OPTARG};;
    esac
done

# Build

if [ "$build" = "true" ] ; then
    echo "Building.."
    sudo docker build backend/ -t dahol/inventoryjsbackend
    sudo docker build frontend/ -t dahol/inventoryjsfrontend
    echo "Done building!"
elif [ "$build" = "false" ] ; then
    echo "Skipping build.."
fi

# Push

if [ "$push" = "true" ] ; then
    echo "Pushing.."
    sudo docker push dahol/inventoryjsbackend
    sudo docker push dahol/inventoryjsfrontend
    echo "Done pushing!"
elif [ "$push" = "false" ] ; then
    echo "Skipping push.."
fi